import React, { useEffect, useState } from 'react';
import { NextPage, GetServerSideProps } from 'next'
import axios from 'axios';

const createComponents = async (c: string[]) => {
	const ar = [];
	for (const it of c)
	{
		const { default: res } = await import('@/components/' + it);
		ar.push({name: it, component: res});
	}
	return ar;
}

interface IHome {
	components: string[];
}

const Index: NextPage<IHome> = (props) => {
	const  {
		components
	} = props;
	//state
	const [com, setCom] = useState<any>(null);

	useEffect(() => {
		createComponents(components) 
		.then((res) => {
			setCom(res)
		})

	}, []);

	return (
		<main>
		{
			com && 
			com.map((d: {name: string, component: React.FC},i: number) => {
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
				components: arr
			}
		};
	} catch (error) {
		return {
			notFound: true
		};
	}
};

export default Index;
