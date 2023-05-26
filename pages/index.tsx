import React from 'react';
import { NextPage, GetServerSideProps } from 'next'
import axios from 'axios';
import useCreateComponents from '@/components/hooks/useCreateComponents';

interface IComponents {
	name: string;
	component: React.FC;
}

interface IHome {
	components: string[];
}


const Index: NextPage<IHome> = (props) => {
	const  {
		components,
	} = props;
	//hooks
	const { el } = useCreateComponents(components);

	return (
		<main>
		{
			el && 
			el.map((d: IComponents,i: number) => {
				const Com = d.component;
				return <Com key={i}/>
			})
		}
		</main>
	)
}

export const getServerSideProps: GetServerSideProps = async () => {
	try {
		const res = await axios.get('http://localhost:3000/api/main');
		const arr: [] = res.data.components;

		return { 
			props: {
				components: arr,
			}
		};
	} catch (error) {
		return {
			notFound: true
		};
	}
};

export default Index;
