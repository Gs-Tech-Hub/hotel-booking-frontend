import Image from 'next/image';

export default function BlogSection() {
  return (
    <div className="blog">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="titlepage">
              <h2>Blog</h2>
              <p>Lorem Ipsum available, but the majority have suffered</p>
            </div>
          </div>
        </div>
        <div className="row">
          {[1, 2, 3].map((num) => (
            <div key={num} className="col-md-4">
              <div className="blog_box">
                <div className="blog_img">
                  <figure>
                    <Image src={`/images/blog${num}.jpg`} alt="blogimage" layout="responsive" width={500} height={300} />
                  </figure>
                </div>
                <div className="blog_room">
                  <h3>Bed Room</h3>
                  <span>The standard chunk</span>
                  <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
