const LevelBar = ({
  totalBars = 5,
  currentLevel = 1,
  barWidth = "w-12",
  barHeight = "h-2",
  activeColor = "bg-n-2",
  inactiveColor = "bg-n-7",
  spacing = "mx-1",
}) => {
  return (
    <div className="flex h-5 w-fit items-center">
      {Array.from({ length: totalBars }, (_, index) => (
        <div
          key={index}
          className={` ${barWidth} ${barHeight} ${spacing} ${index < currentLevel ? activeColor : inactiveColor} ${index === 0 ? "rounded-s-full" : ""} ${index === totalBars - 1 ? "rounded-e-full" : ""} max-md:w-8`}
        />
      ))}
    </div>
  );
};

export default LevelBar;
