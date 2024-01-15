import Transition from "@/app/transition";

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="p-[100px] m-[10px] border flex
     justify-center items-center shadow-xl rounded-xl"
    >
      <Transition>{children}</Transition>
    </div>
  );
};

export default Card;
