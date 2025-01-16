const LevelBar = ({
    totalBars = 5,
    currentLevel = 1,
    barWidth = 'w-12',
    barHeight = 'h-2',
    activeColor = 'bg-n-2',
    inactiveColor = 'bg-n-7',
    spacing = 'mx-1'
}) => {
    return (
        <div className="flex items-center h-5 w-fit">
            {Array.from({ length: totalBars }, (_, index) => (
                <div
                    key={index}
                    className={`
            ${barWidth} 
            ${barHeight} 
            ${spacing}
            ${index < currentLevel ? activeColor : inactiveColor}
            ${index === 0 ? 'rounded-s-full' : ''}
            ${index === totalBars - 1 ? 'rounded-e-full' : ''}
          `}
                />
            ))}
        </div>
    );
};

export default LevelBar;