'use client'

import { useActionState } from "react";
import { createMeeting, type State } from "@/lib/actions";

const initialState: State = { message: null, errors: {} };

export default function CreateMeetingForm() {
    const [state, formAction, isPending] = useActionState(createMeeting, initialState)

    return (
        <form action={formAction} className="space-y-4 rounded-lg border border-slate-200 bg-white p-6 shadow-sm text-slate-700">
            <div className="w-1/2">
                <label htmlFor="date" className="mb-2 block text-sm font-medium text-slate-700">
                    Meeting Date
                </label>
                <input 
                  id="date" 
                  name="date" 
                  type="date"
                  className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring-2"
                  aria-describedby="date-error" 
                  required 
                />
                <div id="date-error" aria-live="polite" aria-atomic="true">
                    {state.errors?.date?.map((error) => (
                        <p key={error} className="mt-1 text-sm text-red-600">
                            {error}
                        </p>
                    ))}
                </div>
            </div>


            <div>
                <p className="mb-2 block text-sm font-medium text-slate-700">
                    Meeting Type
                </p>
                <div className="flex gap-6">
                    <div className="flex items-center">
                        <input
                          id="testimony"
                          name="meetingType"
                          type="radio"
                          value="testimony"
                          className="h-4 w-4 border-slate-300 text-blue-600 focus:ring-blue-500"
                          required 
                        />
                        <label 
                          htmlFor="testimony"
                          className="ml-2 text-sm text-slate-700"
                        >
                            Testimony
                        </label>
                    </div>

                    <div className="flex items-center">
                        <input
                          id="regular"
                          name="meetingType"
                          type="radio"
                          value="regular"
                          className="h-4 w-4 border-slate-300 text-blue-600 focus:ring-blue-500"
                          required 
                        />
                        <label 
                          htmlFor="regular"
                          className="ml-2 text-sm text-slate-700"
                        >
                            Regular
                        </label>
                    </div>

                    <div className="flex items-center">
                        <input
                          id="stake"
                          name="meetingType"
                          type="radio"
                          value="stake"
                          className="h-4 w-4 border-slate-300 text-blue-600 focus:ring-blue-500"
                          required 
                        />
                        <label 
                          htmlFor="stake"
                          className="ml-2 text-sm text-slate-700"
                        >
                            Stake
                        </label>
                    </div>

                    <div className="flex items-center">
                        <input
                          id="general"
                          name="meetingType"
                          type="radio"
                          value="general"
                          className="h-4 w-4 border-slate-300 text-blue-600 focus:ring-blue-500"
                          required 
                        />
                        <label 
                          htmlFor="general"
                          className="ml-2 text-sm text-slate-700"
                        >
                            General
                        </label>
                    </div>

                </div>

                <div id="meetingType-error" aria-live="polite" aria-atomic="true">
                    {state.errors?.meetingType?.map((error) => (
                        <p key={error} className="mt-1 text-sm text-red-600">
                            {error}
                        </p>
                    ))}
                </div>
            </div>            

            <div className="w-1/2">
                <label htmlFor="presiding" className="mb-2 block text-sm font-medium text-slate-700">
                    Presiding
                </label>
                <input 
                  id="presiding" 
                  name="presiding"
                  className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring-2"
                  aria-describedby="presiding-error" 
                  required 
                />
                <div id="presiding-error" aria-live="polite" aria-atomic="true">
                    {state.errors?.presiding?.map((error) => (
                        <p key={error} className="mt-1 text-sm text-red-600">
                            {error}
                        </p>
                    ))}
                </div>
            </div>

            <div className="w-1/2">
                <label htmlFor="conducting" className="mb-2 block text-sm font-medium text-slate-700">
                    Conducting
                </label>
                <input 
                  id="conducting" 
                  name="conducting"
                  className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring-2"
                  aria-describedby="conducting-error" 
                  required 
                />
                <div id="conducting-error" aria-live="polite" aria-atomic="true">
                    {state.errors?.conducting?.map((error) => (
                        <p key={error} className="mt-1 text-sm text-red-600">
                            {error}
                        </p>
                    ))}
                </div>
            </div>


            <div className="w-1/2">
                <label htmlFor="announcements" className="mb-2 block text-sm font-medium text-slate-700">
                    Announcements (comma-separated)
                </label>
                <textarea 
                  id="announcements" 
                  name="announcements" 
                  rows={4} 
                  className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring-2"
                  aria-describedby="announcements-error"
                />
                <div id="announcements-error" aria-live="polite" aria-atomic="true">
                    {state.errors?.announcements?.map((error) => (
                        <p key={error} className="mt-1 text-sm text-red-600">
                            {error}
                        </p>
                    ))}
                </div>
            </div>

            <div>
                <p className="mb-2 block text-sm font-medium text-slate-700">
                    Opening Hymn
                </p>
                <div className="flex gap-4">
                    <div className="">
                        <label htmlFor="openingHymnNumber" className="mb-2 block text-sm font-medium text-slate-700">
                            Hymn Number
                        </label>
                        <input 
                        id="openingHymnNumber" 
                        name="openingHymnNumber" 
                        type="number"
                        min="1"
                        required
                        className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring-2"
                        aria-describedby="openingHymnNumber-error"
                        />
                        <div id="openingHymnNumber-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.openingHymnNumber?.map((error) => (
                                <p key={error} className="mt-1 text-sm text-red-600">
                                    {error}
                                </p>
                            ))}
                        </div>
                    </div>


                    <div className="w-1/2">
                        <label htmlFor="openingHymnTitle" className="mb-2 block text-sm font-medium text-slate-700">
                            Hymn Title
                        </label>
                        <input 
                        id="openingHymnTitle" 
                        name="openingHymnTitle" 
                        type="text"
                        required
                        className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring-2"
                        aria-describedby="openingHymnTitle-error"
                        />
                        <div id="openingHymnTitle-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.openingHymnTitle?.map((error) => (
                                <p key={error} className="mt-1 text-sm text-red-600">
                                    {error}
                                </p>
                            ))}
                        </div>
                    </div>

                </div>
            </div>




            

            <div className="w-1/2">
                <label htmlFor="openingPrayer" className="mb-2 block text-sm font-medium text-slate-700">
                    Opening Prayer
                </label>
                <input
                  id="openingPrayer"
                  name="openingPrayer"
                  className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring-2"
                  aria-describedby="openingPrayer-error"
                  required 
                />
                <div id="openingPrayer-error" aria-live="polite" aria-atomic="true">
                    {state.errors?.openingPrayer?.map((error) => (
                        <p key={error} className="mt-1 text-sm text-red-600">
                            {error}
                        </p>
                    ))}

                </div>
            </div>

            <div className="w-1/2">
                <label htmlFor="wardBusiness" className="mb-2 block text-sm font-medium text-slate-700">
                    Ward Business (comma-separated)
                </label>
                <textarea 
                  id="wardBusiness" 
                  name="wardBusiness" 
                  rows={4} 
                  className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring-2"
                  aria-describedby="wardBusiness-error"
                />
                <div id="wardBusiness-error" aria-live="polite" aria-atomic="true">
                    {state.errors?.wardBusiness?.map((error) => (
                        <p key={error} className="mt-1 text-sm text-red-600">
                            {error}
                        </p>
                    ))}
                </div>
            </div>

            <div className="w-1/2">
                <label htmlFor="stakeBusiness" className="mr-2 text-sm font-medium text-slate-700">
                    Stake Business
                </label>
                <input 
                  id="stakeBusiness" 
                  name="stakeBusiness" 
                  type="checkbox"
                  className="h-4 w-4 rounded border border-slate-300 text-blue-600 focus:ring-blue-500"
                  aria-describedby="stakeBusiness-error"
                />
                <div id="stakeBusiness-error" aria-live="polite" aria-atomic="true">
                    {state.errors?.stakeBusiness?.map((error) => (
                        <p key={error} className="mt-1 text-sm text-red-600">
                            {error}
                        </p>
                    ))}
                </div>
            </div>


            <div>
                <p className="mb-2 block text-sm font-medium text-slate-700">
                    Sacrament Hymn
                </p>
                <div className="flex gap-4">
                    <div className="">
                        <label htmlFor="sacramentHymnNumber" className="mb-2 block text-sm font-medium text-slate-700">
                            Hymn Number
                        </label>
                        <input 
                        id="sacramentHymnNumber" 
                        name="sacramentHymnNumber" 
                        type="number"
                        min="1"
                        required
                        className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring-2"
                        aria-describedby="sacramentHymnNumber-error"
                        />
                        <div id="sacramentHymnNumber-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.sacramentHymnNumber?.map((error) => (
                                <p key={error} className="mt-1 text-sm text-red-600">
                                    {error}
                                </p>
                            ))}
                        </div>
                    </div>


                    <div className="w-1/2">
                        <label htmlFor="sacramentHymnTitle" className="mb-2 block text-sm font-medium text-slate-700">
                            Hymn Title
                        </label>
                        <input 
                        id="sacramentHymnTitle" 
                        name="sacramentHymnTitle" 
                        type="text"
                        required
                        className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring-2"
                        aria-describedby="sacramentHymnTitle-error"
                        />
                        <div id="sacramentHymnTitle-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.sacramentHymnTitle?.map((error) => (
                                <p key={error} className="mt-1 text-sm text-red-600">
                                    {error}
                                </p>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            <div>
                <p className="mb-2 block text-sm font-medium text-slate-700">Speakers</p>

                <div className="w-1/2">
                    <div className="mb-4">
                        <p className="mb-2 block text-sm font-medium text-slate-700">
                            Speaker 1
                        </p>

                        <label htmlFor="speaker1Name" className="mb-2 block text-sm font-medium text-slate-700"
                        >
                            Name
                        </label>
                        <input 
                            id="speaker1Name"
                            name="speaker1Name"
                            type="text"
                            required
                            aria-describedby="speaker1Name-error" 
                            className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring-2"
                        />

                        <div id="speaker1Name-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.speaker1Name?.map((error) => (
                                <p key={error} className="mt-1 text-sm text-red-600">
                                    {error}
                                </p>
                            ))}
                        </div>                        
                    </div>

                    <div className="mb-4">
                        <label htmlFor="speaker1Topic" className="mb-2 block text-sm font-medium text-slate-700">
                            Topic
                        </label>
                        <input
                            id="speaker1Topic"
                            name="speaker1Topic" 
                            type="text" 
                            required
                            className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring-2"
                        />

                        <div id="speaker1Topic-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.speaker1Topic?.map((error) => (
                                <p key={error} className="mt-1 text-sm text-red-600">
                                    {error}
                                </p>
                            ))}
                        </div>
                    </div>

                    <div className="mb-4">

                        <p className="mb-2 text-sm font-medium text-slate-700">
                            Type
                        </p>

                        <div className="flex gap-6">
                            <label className="flex items-center">
                                <input
                                    name="speaker1Type" 
                                    type="radio" 
                                    value="speaker"
                                    required
                                    className="h-4 w-4 border-slate-300 text-blue-600 focus:ring-blue-600" 
                                />
                                <span className="ml-2 text-sm text-slate-700">
                                    Speaker
                                </span>
                            </label>

                            <label className="flex items-center">
                                <input
                                    name="speaker1Type" 
                                    type="radio" 
                                    value="musical-number"
                                    required
                                    className="h-4 w-4 border-slate-300 text-blue-600 focus:ring-blue-600" 
                                />
                                <span className="ml-2 text-sm text-slate-700">
                                    Musical Number
                                </span>
                            </label>
                        </div>

                        <div id="speaker1Type-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.speaker1Type?.map((error) => (
                                <p key={error} className="mt-1 text-sm text-red-600">
                                    {error}
                                </p>
                            ))}
                        </div>
                    </div>



                    
                </div>
            </div>


            <div>
                <p className="mb-2 block text-sm font-medium text-slate-700">
                    Closing Hymn
                </p>
                <div className="flex gap-4">
                    <div className="">
                        <label htmlFor="closingHymnNumber" className="mb-2 block text-sm font-medium text-slate-700">
                            Hymn Number
                        </label>
                        <input 
                        id="closingHymnNumber" 
                        name="closingHymnNumber" 
                        type="number"
                        min="1"
                        required
                        className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring-2"
                        aria-describedby="closingHymnNumber-error"
                        />
                        <div id="closingHymnNumber-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.closingHymnNumber?.map((error) => (
                                <p key={error} className="mt-1 text-sm text-red-600">
                                    {error}
                                </p>
                            ))}
                        </div>
                    </div>


                    <div className="w-1/2">
                        <label htmlFor="closingHymnTitle" className="mb-2 block text-sm font-medium text-slate-700">
                            Hymn Title
                        </label>
                        <input 
                        id="closingHymnTitle" 
                        name="closingHymnTitle" 
                        type="text"
                        required
                        className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring-2"
                        aria-describedby="closingHymnTitle-error"
                        />
                        <div id="closingHymnTitle-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.closingHymnTitle?.map((error) => (
                                <p key={error} className="mt-1 text-sm text-red-600">
                                    {error}
                                </p>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            <div className="w-1/2">
                <label htmlFor="closingPrayer" className="mb-2 block text-sm font-medium text-slate-700">
                    Closing Prayer
                </label>
                <input
                  id="closingPrayer"
                  name="closingPrayer"
                  className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring-2"
                  aria-describedby="closingPrayer-error"
                  required 
                />
                <div id="closingPrayer-error" aria-live="polite" aria-atomic="true">
                    {state.errors?.closingPrayer?.map((error) => (
                        <p key={error} className="mt-1 text-sm text-red-600">
                            {error}
                        </p>
                    ))}

                </div>
            </div>



            {state.message? <p className="text-sm text-red-600">{state.message}</p>: null}

            <button 
              type="submit"
              disabled={isPending}
              className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
                {isPending ? 'Saving...' : 'Save Meeting'}
            </button>
        </form>
    )
}