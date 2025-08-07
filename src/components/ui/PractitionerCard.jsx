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
                <div className="p-4">
                    <span className="text-lg font-semibold text-gray-900 block">{practitioner.name}</span>
                    <span className="inline-block text-sm font-normal underline underline-offset-2">
                        {practitioner.specialty}
                    </span>
                    <div className="flex justify-center">
                        <a
                            className="block mx-auto mt-6 rounded-3xl bg-s1 px-3 py-2 text-white"
                            href={practitioner.profileUrl}
                        >
                            View Profile
                        </a>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default PractitionerCard;
