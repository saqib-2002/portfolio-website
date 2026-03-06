const profileImage =
  "https://res.cloudinary.com/dddorzxo2/image/upload/v1772757598/saqib_t7iakt.png";

const ProfileImg: React.FC = () => {
  return (
    <div className="relative mx-auto h-64 w-64">
      {/* glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/30 via-purple-500/20 to-pink-500/30 blur-2xl" />

      {/* image */}
      <img
        src={profileImage}
        alt="Saqib profile img"
        className="relative z-10 h-full w-full rounded-2xl object-cover"
      />
    </div>
  );
};

export default ProfileImg;
