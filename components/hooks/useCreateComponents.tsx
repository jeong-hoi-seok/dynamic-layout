import React, { useEffect, useState } from 'react';

const createComponents = async (c: string[]) => {
	const ar = [];
	for (const data of c)
	{
		const { default: res } = await import('@/components/' + data);
		ar.push({name: data, component: res});
	}
	return ar;
}

interface IComponents {
	name: string;
	component: React.FC;
}

const useCreateComponents = (components: string[]) => {
    //state
	const [com, setCom] = useState<null | IComponents[]>(null);

    useEffect(() => {
		createComponents(components) 
		.then((res) => {
			setCom(res)
		})
	}, []);

    return { el: com };
};

export default useCreateComponents;