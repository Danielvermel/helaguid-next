// components/VideoBackground.jsx
const VideoBackground = ({ videoSrc, posterSrc, fallbackSrc }) => {
    return (
        <div className="absolute inset-0 w-full h-full -z-10">
            <video
                autoPlay
                loop
                muted
                playsInline
                poster={posterSrc}
                className="w-full h-full object-cover"
                alt="Sunrise over UK mountains symbolising holistic healing – HealGuid"
            >
                <source src={videoSrc} type="video/webm" />
                <source src={fallbackSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            {/* Add a dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>
    );
};

export default VideoBackground;
