import { NextPage } from "next";
import { useParams } from "next/navigation";

type UserParams = { params: {id: string}}

const user: NextPage<UserParams> = ({params}) => {
  const {id} = params;
	return (
    <div>
      <p>{id}のページです。</p>
      <p>{new Date().toISOString()}</p>
    </div>
	)
}

// /path/1/user
export const generateStaticParams = async () => {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ];
}

export default user;