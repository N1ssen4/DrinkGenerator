import { ApiInformation } from "components/ApiInfoContainer/ApiInformation";
import type { NextPage } from "next";


const ApiInfo: NextPage = () => {
  return (
    <div className='bg-gradient-to-b from-amber-500'>
      <ApiInformation/>
    </div>
  );
};

export default ApiInfo;
