import Link from 'next/link';
import Layout from '../components/Layout';
import Counter from '../components/Counter';

export default () =>(
  <Layout header="INDEX" title="Top Page">
      <Counter />
      <hr />
        <Link href="./other">
            <button>go to Other &gt;&gt;</button>
        </Link>
  </Layout>
);