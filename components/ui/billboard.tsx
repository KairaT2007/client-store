import { Billboard } from "@/types";

interface BillboardProps {
  data: Billboard;
}

const Billboard: React.FC<BillboardProps> = ({
  data
}) => {
  console
  return ( 
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div style={{ backgroundImage: `url(${data?.imageUrl})` }} className="rounded-xl aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover bg-center bg-no-repeat">
      </div>
    </div>
   );
};

export default Billboard;
