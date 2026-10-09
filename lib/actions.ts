'use server'

import { z } from 'zod'
import { addMeeting } from './meetings-db'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { SpeakerItem } from './types'


const MeetingFormSchema = z.object({
    date: z.string().min(3, 'Title must be at least 3 characters.'),
    meetingType: z.enum(['testimony', 'regular', 'stake', 'general'], 'Meeting Type must be testimony, regular, stake or general'),
    conducting: z.string().min(3, 'Conducting must be at least 3 characters.'),
    presiding: z.string().min(3, 'Presiding must be at least 3 characters.'),
    announcements: z.string().optional(),
    openingHymnNumber: z.coerce
        .number()
        .int('Hymn number must be a whole number.')
        .positive('Hymn number must be greater than 0.'),

    openingHymnTitle: z.string().min(1, 'Hymn Title is required.'),

    openingPrayer: z.string().min(1, 'opening prayer required.'),

    wardBusiness: z.string().optional(),

    stakeBusiness: z.string().optional(),

    sacramentHymnNumber: z.coerce
        .number()
        .int('Hymn Number must be a whole number.')
        .positive('Hymn Number must be greater than 0.'),

    sacramentHymnTitle: z.string()
        .min(1, 'Sacrament Hymn Title is required'),

    speaker1Name: z.string()
    .min(1, 'Speaker name is required.'),

    speaker1Topic: z.string()
        .min(1, 'Speaker topic is required.'),

    speaker1Type: z.enum(
        ['speaker', 'musical-number'],
        'Please select a valid speaker type.'
    ),
    

    closingHymnNumber: z.coerce
        .number()
        .int('Hymn number must be a whole number.')
        .positive('Hymn number must be greater than 0.'),

    closingHymnTitle: z.string()
        .min(1, 'Closing Hymn Title is required'),

    closingPrayer: z.string()
        .min(1, 'Closing prayer is required.'),
})

export type State = {
    errors?: {
        date?: string[];
        meetingType?: string[];
        conducting?: string[];
        presiding?: string[];
        announcements?: string[];
        openingHymnNumber?: string[];
        openingHymnTitle?: string[];
        openingPrayer?: string[];
        wardBusiness?: string[];
        stakeBusiness?: string[];
        sacramentHymnNumber?: string[];
        sacramentHymnTitle?: string[];
        speaker1Name?: string[];
        speaker1Topic?: string[];
        speaker1Type?: string[];
        closingHymnNumber?: string[];
        closingHymnTitle?: string[];
        closingPrayer?: string[];
    };
    message?: string | null;
}

export async function createMeeting(
    _prevState: State, 
    formData: FormData
): Promise<State> {

    const validatedFields = MeetingFormSchema.safeParse({
        date: formData.get('date'),
        meetingType: formData.get('meetingType'),
        conducting: formData.get('conducting'),
        presiding: formData.get('presiding'),

        announcements: formData.get('announcements'),

        openingHymnNumber: formData.get('openingHymnNumber'),
        openingHymnTitle: formData.get('openingHymnTitle'),

        openingPrayer: formData.get('openingPrayer'),

        sacramentHymnNumber: formData.get('sacramentHymnNumber'),
        sacramentHymnTitle: formData.get('sacramentHymnTitle'),

        wardBusiness: formData.get('wardBusiness'),
        stakeBusiness: formData.get('stakeBusiness') ?? '',

        speaker1Name: formData.get('speaker1Name'),
        speaker1Topic: formData.get('speaker1Topic'),
        speaker1Type: formData.get('speaker1Type'),

        closingHymnNumber: formData.get('closingHymnNumber'),
        closingHymnTitle: formData.get('closingHymnTitle'),
        closingPrayer: formData.get('closingPrayer')

    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing or invalid fields. Failed to create meeting.',
        }
    }

    const { 
        date, 
        meetingType, 
        conducting, 
        presiding, 
        announcements, 
        openingHymnNumber, 
        openingHymnTitle, 
        openingPrayer,
        sacramentHymnNumber, 
        sacramentHymnTitle, 
        wardBusiness,
        speaker1Name,
        speaker1Topic,
        speaker1Type,
        closingHymnNumber, 
        closingHymnTitle, 
        closingPrayer 
    } = validatedFields.data;


    const announcementsArray = announcements
        ? announcements
            .split(',')
            .map((announcement) => announcement.trim())
            .filter(Boolean)
        : [];
    

    const openingHymn = {
        number: openingHymnNumber,
        title: openingHymnTitle,
    }

    const wardBusinessArray = wardBusiness
    ? wardBusiness
        .split(',')
        .map((item) => item.trim())
        .filter(Boolean)
    : [];

    const wardBusinessItems = wardBusinessArray.map((description) => ({
        description,
    }));

    const stakeBusiness = validatedFields.data.stakeBusiness === 'on';

    const sacramentHymn = {
        number: sacramentHymnNumber,
        title: sacramentHymnTitle,
    }

    const speakers: SpeakerItem[] = [
        {
            name: speaker1Name,
            topic: speaker1Topic,
            type: speaker1Type,
        }
    ]

    const closingHymn = {
        number: closingHymnNumber,
        title: closingHymnTitle,
    }



    try{
        await addMeeting({
            date,
            meetingType,
            conducting,
            presiding,
            announcements: announcementsArray,
            openingHymn,
            openingPrayer,
            wardBusiness: wardBusinessItems,
            stakeBusiness,
            sacramentHymn,
            speakers,
            closingHymn,
            closingPrayer,
        })
    } catch (error) {
        console.error('DATABASE ERROR:', error);
        return {
            message: `Database error: ${error instanceof Error ? error.message : 'unknown error' }`,
        }
    }
    revalidatePath('/meetings');
    redirect('/meetings')
}

// export async function updateProject(id: number, formData: FormData) {
//     const raw = {
//         title: formData.get('title'),
//         description: formData.get('description'),
//         technologies: formData.get('technologies')
//     }

//     const parsed = ProjectFormSchema.safeParse(raw);
//     if (!parsed.success) {
//         throw new Error('Invalid project input.')
//     }

//     const { title, description, technologies } = parsed.data;

//     await sql`
//       UPDATE projects 
//       SET
//         title = ${title},
//         description = ${description},
//         technologies = ${technologies}
//       WHERE id = ${id} 
//     `;
    
//     revalidatePath('/projects');
//     redirect('/projects')
// }

// export async function deleteProject(id: number) {
//     try {
//         await sql`DELETE FROM projects where id = ${id}`;
//         revalidatePath('/projects')
//     } catch (error) {
//         console.error('Error deleting your project:', error);
//         throw new Error('Failed to delete project. Please try again later.')
//     }
//     revalidatePath('/projects')
//     redirect('/projects')
// }