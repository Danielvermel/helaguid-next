import clsx from "clsx";

const Review = ({ item, containerClassName, commentClassName, userClassName }) => {
    return (
        <div className={clsx(containerClassName)}>
            <blockquote className={clsx("mb-2 text-gray", commentClassName || "text-sm")}>"{item.comment}"</blockquote>

            <div className={clsx("flex flex-wrap items-center", userClassName)}>
                {item?.profile.image && (
                    <div>
                        <div className="mx-auto size-14 shrink-0 rounded-half">
                            <img src={item.profile.image} alt={item.profile.title} className="size-full object-cover" />
                        </div>
                        <div className="text-xs text-center font-semibold tracking-2">{item.profile.title}</div>
                        <div className="text-xs text-center tracking-2">{item.profile.work}</div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Review;
