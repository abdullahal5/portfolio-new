const SkillLevel = ({ percentage }) => {
  const numDivs = 5;
  const colorfulDivs = Math.ceil((percentage / 100) * numDivs);
  const whiteDivs = numDivs - colorfulDivs;

  return (
    <>
        <div className="flex items-center space-x-0.5">
          {[...Array(colorfulDivs)].map((_, index) => (
            <div
              key={index}
              className={`h-1.5 w-5 bg-violet-500 
          ${index === 0 ? "rounded-l" : ""} 
          ${index === 4 ? "rounded-r" : ""}`}
            ></div>
          ))}
          {[...Array(whiteDivs)].map((_, index) => (
            <div
              key={colorfulDivs + index}
              className={`h-1.5 w-5 bg-gray-200 
          ${index === whiteDivs - 1 ? "rounded-r" : ""}`}
            ></div>
          ))}
        </div>
    </>
  );
};

export default SkillLevel;
