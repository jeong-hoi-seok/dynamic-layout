import { NextPage ,GetServerSideProps } from 'next'
import axios from 'axios';

const Index: NextPage = (props) => {
  console.log(props)
  return (
    <main>

    </main>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const res = await axios.get('http://localhost:3000/api/main');
    const result = res.data;
    
    return { props: result };
  } catch (error) {
    return {
      notFound : true
    };
  }
};

export default Index;
