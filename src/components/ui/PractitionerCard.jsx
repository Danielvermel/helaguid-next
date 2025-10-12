// components/PractitionerCard.jsx
import Link from "next/link";
import Image from "next/image";

const PractitionerCard = ({ practitioner }) => {
    return (
        <Link href={practitioner.profileUrl} className="block group">
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden h-full">
                <div className="relative w-full aspect-[3/3]">
                    <Image
                        src={practitioner.imageUrl}
                        alt={`Portrait of ${practitioner.name}`}
                        fill
                        className="object-cover  object-[center_10%]"
                        sizes="(max-width: 768px) 100vw, 33vw"
                    />
                </div>
                <div className="p-4 sm:h-72 md:h-[20.4rem] lg:h-[20rem] xl:h-[18rem] flex flex-col ">
                    <span className="text-lg font-bold text-gray-900 block">{practitioner.name}</span>
                    <span className="inline-block text-sm font-medium  font-sans underline-offset-2">
                        {practitioner.specialty}
                    </span>
                    {practitioner.ratings > 0 && (
                        <div className="flex items-center mt-3">
                            {Array.from({ length: parseInt(practitioner.ratings) }, () => (
                                <svg
                                    className="w-4 h-4 text-yellow-300 ms-1"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                            ))}
                        </div>
                    )}

                    <span className="inline-block text-sm mt-3 font-sans font-light text-gray-600">
                        {practitioner.bio.length > 120 ? practitioner.bio.slice(0, 170) + "..." : practitioner.bio}
                    </span>

                    <div className="flex justify-center  mt-auto ">
                        <a
                            className="block text-sm mx-auto rounded-2xl bg-teal-800 hover:bg-teal-600 transition-opacity duration-300 hover:opacity-80 px-3 py-2 text-white"
                            href={practitioner.profileUrl}
                        >
                            Book Now
                        </a>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default PractitionerCard;
