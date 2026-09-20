import type { SacramentMeeting } from './types';

const meetings: SacramentMeeting[] = [
    {
        id: 1,
        date: '2026-05-03',
        meetingType: 'regular',
        presiding: 'Bishop Smith',
        conducting: 'BrotherJones',
        openingHymn: { number: 2, title: 'The Spirit of God'},
        openingPrayer: 'Sister Williams',
        wardBusiness: [{ description: 'Sustaining of new Primary president' }],
        stakeBusiness: false,
        sacramentHymn: { number: 169, title: 'In Remembrance of Thy Suffering' },
        speakers: [
            { name: 'Sister Brown', topic: 'Faith in Jesus Christ', type: 'speaker'},
            { name: 'Youth Choir', topic: '', type: 'musical-number'}
        ],
        closingHymn: { number: 31, title: 'O God, Our Help in Ages Past' },
        closingPrayer: 'Brother Davis',
        announcements: ['Ward temple night: May 10'] 
    },
    {
        id: 2,
        date: '2026-09-20',
        meetingType: 'regular',
        presiding: 'Bishop Aspajo',
        conducting: 'Brother Luque',
        openingHymn: { number: 10, title: 'We Thank Thee O God for a Prophet'},
        openingPrayer: 'Sister Murillo',
        wardBusiness: [{ description: 'Sustaining of new Relief Society counselor' }],
        stakeBusiness: false,
        sacramentHymn: { number: 1009, title: 'Living Water, Bread of Life' },
        speakers: [
            { name: 'Sister Lopez', topic: 'Tithing', type: 'speaker'},
            { name: 'Brother Payan', topic: 'Temple', type: 'speaker'}
        ],
        closingHymn: { number: 1003, title: 'Reigns Peace in Be' },
        closingPrayer: 'Brother Carlos Camargo',
        announcements: ['Stake Conference Sept 25'] 
    },
    {
        id: 3,
        date: '2026-09-13',
        meetingType: 'regular',
        presiding: 'Bishop Aspajo',
        conducting: 'Brother Roberto Lopez',
        openingHymn: { number: 196, title: 'I am a Child of God'},
        openingPrayer: 'Sister Jassive Paz',
        wardBusiness: [{ description: 'Sustaining of Family Search Consultant Ruben Rabago' }],
        stakeBusiness: true,
        sacramentHymn: { number: 164, title: 'In an Away Land was' },
        speakers: [
            { name: 'Sister Celsa Mendez', topic: 'Repentance', type: 'speaker'},
            { name: 'Brother Alfredo Garcia', topic: 'Blessings of serving', type: 'speaker'}
        ],
        closingHymn: { number: 198, title: 'Families Can Be Together Forever' },
        closingPrayer: 'Brother Leandro',
        announcements: [] 
    },
    {
        id: 4,
        date: '2026-09-06',
        meetingType: 'testimony',
        presiding: 'Stake Presidency 1st Counselor President Jimenez',
        conducting: 'Bishop Aspajo',
        openingHymn: { number: 27, title: 'Praise to the Man'},
        openingPrayer: 'Sister Bryan Jared',
        wardBusiness: [],
        stakeBusiness: true,
        sacramentHymn: { number: 172, title: 'In Humility, Our Savior' },
        speakers: [
            { name: 'Sister Micaela Rios', topic: '', type: 'speaker'},
            { name: 'Brother Alfredo Garcia', topic: '', type: 'speaker'},
            { name: 'Sister Mireya Acosta', topic: '', type: 'speaker'},
            { name: 'Brother Luis Payan', topic: '', type: 'speaker'},
            { name: 'Sister Maria Delgado', topic: '', type: 'speaker'},
            { name: 'Brother Hiram Aviles', topic: '', type: 'speaker'},
        ],
        closingHymn: { number: 134, title: 'I Believe in Christ' },
        closingPrayer: 'Sister Manuela Cardenas',
        announcements: ['Culiacan Stake Talk: Take people to Christ with the Temple and their ordinances'] 
    },
    {
        id: 5,
        date: '2026-08-30',
        meetingType: 'regular',
        presiding: 'Bishop Carlos Aspajo',
        conducting: 'Brother Carlos Luque',
        openingHymn: { number: 27, title: 'Praise to the Man'},
        openingPrayer: 'Sister Rebeca Jimenez',
        wardBusiness: [],
        stakeBusiness: false,
        sacramentHymn: { number: 169, title: 'As Now We Take the Sacrament' },
        speakers: [
            { name: 'Brother Lorenzo Martinez', topic: 'Baptism', type: 'speaker'},
            { name: 'Brother Jacob Payan', topic: 'Missionary Work', type: 'speaker'},
            { name: 'Sister Cipatly Murillo', topic: 'Teach the Family', type: 'speaker'},
        ],
        closingHymn: { number: 29, title: 'A Poor Wayfaring Man of Grief' },
        closingPrayer: 'Sister Guadalupe Lopez',
        announcements: ['Reminder of new schedule for classes next sunday', 'Next Temple Trip on Sept 17'] 
    },
    // add remaining records
];

export function getMeetings(date?: string | null): SacramentMeeting[] {
    if (date) return meetings.filter(m => m.date === date);
    return meetings
}

export function getMeetingById(id: number): SacramentMeeting | null {
    return meetings.find(m => m.id === id) ?? null;
}