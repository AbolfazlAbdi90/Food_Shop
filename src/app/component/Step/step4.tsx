"use client"



export default function StepFour() {
  

   const handleStart = () => {
    localStorage.setItem("hasSeenOnboarding", "true");
    window.location.href = "/login"
  };

  return (
    <div>
      <div className="w-[240px] h-[292px] relative top-[0px] left-[40px] bg-[#98A8B8] rounded-2xl"></div>
      <h1 className="relative top-[63px] text-[27px] left-[0]">Order from choosen chef</h1>
      <p className="text-[#646982] relative top-[92px] left-[9]">
        Get all your loved foods in one once place,<br />
        you just place the order, we do the rest
      </p>

       <button
        onClick={handleStart}
        className="bg-[#FF7622] h-[62px] w-[327px] text-white rounded-2xl relative top-[250]"
      >
        Get started
      </button>
    </div>
  );
}

