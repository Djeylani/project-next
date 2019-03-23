import Layout from '../component/Layout'
import Footer from './footer'


function Images() {
  return <img className="card-image-top" src="https://picsum.photos/550" />
}


const Index = (props) => (
    <Layout>
        
        <div className="card card-body">
        <h1 className="text-center card-title">Death Comes To Us All</h1>
        <Images />
          <p className="card-text">Many men must see death in the eyes and then either say, I am ready and come with pease or scream and cry with regrets and realisations about that which he believed in not to be as true as he thought and believed.</p>
        </div>
        <Footer />
    </Layout>
); 

export default Index