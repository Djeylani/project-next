import Layout from "../component/Layout";
import Footer from "./footer";

function Images() {
    return <img className="card-image-top" src="https://picsum.photos/450" />
}

const About = () => (
    <Layout>
      <div className="card card-body">
        <h4 className="card-title text-center">This is About The App Pages</h4>
        <Images />
        <p className="card-text text-center">A lot of content is needed in order to be read and understood, though only if the explaination is about the topic at hand, otherwise it is a futile atempt that will never be understood.</p>
        <p className="card-text text-center">It takes a courage to speak up, it has once been said and that is true to its full extend. There are those, of course, who finds it natural to speak up, and those that finds it hard. The question, however, is that, which is to be asked: "Will you speak up against your own best friend when they are wrongfully harming another life? Even if that life is human and not a dog?"</p>
        <p className="card-text text-center">Contemplate upon that and think about it deeper before you answer. That is appreciated!</p>
      </div>
      <Footer />
    </Layout>
    

)

export default About
