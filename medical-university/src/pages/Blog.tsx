import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Reveal, RevealGroup, childVariants } from "../components/Reveal";
import { Icon } from "../components/Icon";
import { FAQSection, NewsletterSection } from "../components/sections";
import { BLOG, NEWSLETTER } from "../data/content";

export default function Blog() {
  const { header, featured, posts, faq } = BLOG;

  return (
    <>
      {/* Featured header */}
      <header className="blog-hero bg-dark">
        <div className="blob" style={{ background: "#0891b2", width: 340, height: 340, top: -60, right: 40 }} />
        <div className="container">
          <Reveal className="text-center center-block">
            <span className="eyebrow on-dark">{header.eyebrow}</span>
            <h1 className="page-header__title">{header.title}</h1>
            <p className="page-header__lead center-block">{header.lead}</p>
          </Reveal>

          <Reveal className="featured-post glass" dir="up" delay={0.1}>
            <div className="featured-post__media">
              <span className="featured-post__category">{featured.category}</span>
            </div>
            <div className="featured-post__body">
              <h2>{featured.title}</h2>
              <p>{featured.excerpt}</p>
              <div className="post-meta">
                <span>{featured.author}</span>
                <span>·</span>
                <span>{featured.date}</span>
                <span>·</span>
                <span>{featured.read}</span>
              </div>
              <Link to="/blog/featured" className="btn btn-primary mt-24">
                Read article <Icon name="arrow" size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </header>

      {/* Post grid */}
      <section className="section">
        <div className="container">
          <RevealGroup className="grid grid-3">
            {posts.map((p) => (
              <motion.article key={p.title} className="card post-card" variants={childVariants}>
                <Link to="/blog/featured" className="post-card__link">
                  <div className="post-card__thumb">
                    <span className="post-card__category">{p.category}</span>
                  </div>
                  <div className="post-card__body">
                    <h3>{p.title}</h3>
                    <p>{p.excerpt}</p>
                    <div className="post-meta">
                      <span>{p.author}</span>
                      <span>·</span>
                      <span>{p.date}</span>
                      <span>·</span>
                      <span>{p.read}</span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </RevealGroup>
        </div>
      </section>

      <NewsletterSection {...NEWSLETTER} />

      <FAQSection {...faq} />
    </>
  );
}
