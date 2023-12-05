import { GetStaticProps, NextPage, NextPageContext } from "next";
import Head from 'next/head'; // This line has been added

const ssg: NextPage = () => {
	return (
		<div>
			{/* コメント */}
			<Head>
				<title>Static Site Generation</title>
			</Head>
			<main>
				<p>このサイトは静的サイト生成で生成されました</p>
				<p>{new Date().toLocaleTimeString()}</p>
			</main>
		</div>
	)
}

export default ssg;