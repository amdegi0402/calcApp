import Layout from '../components/Layout';
import Link from 'next/link';
import Counter from '../components/Counter';

export default() =>(
  <Layout header="OTHER" title="Other Page">
      <Counter />
      <hr />
      <div>
        <Link href="/">
            <button>&lt;&lt;Back to Top</button>
        </Link>
      </div>
  </Layout>
);