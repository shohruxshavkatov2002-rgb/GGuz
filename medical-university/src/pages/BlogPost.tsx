import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal";
import { Icon } from "../components/Icon";
import { ReviewsSection, CTASection, NewsletterSection } from "../components/sections";
import { BLOG_POST, CTA, NEWSLETTER } from "../data/content";

export default function BlogPost() {
  const post = BLOG_POST;

  return (
    <>
      {/* Post header */}
      <header className="post-header bg-dark">
        <div className="blob" style={{ background: "#16a34a", width: 320, height: 320, top: -80, left: -40, opacity: 0.4 }} />
        <div className="container post-header__inner">
          <Reveal>
            <Link to="/blog" className="post-header__back">
              <Icon name="arrow" size={16} className="flip" /> Back to Journal
            </Link>
            <span className="eyebrow on-dark">{post.category}</span>
            <h1 className="post-header__title">{post.title}</h1>
            <div className="post-meta post-meta--light">
              <span className="post-author">{post.author}</span>
              <span>·</span>
              <span>{post.role}</span>
              <span>·</span>
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.read}</span>
            </div>
          </Reveal>
        </div>
        <div className="post-header__cover" aria-hidden="true" />
      </header>

      {/* Body */}
      <article className="section">
        <div className="container post-body">
          {post.body.map((block, i) => {
            if (block.type === "h")
              return (
                <Reveal key={i}>
                  <h2 className="post-body__h">{block.text}</h2>
                </Reveal>
              );
            if (block.type === "quote")
              return (
                <Reveal key={i}>
                  <blockquote className="post-body__quote">
                    <Icon name="quote" size={26} />
                    {block.text}
                  </blockquote>
                </Reveal>
              );
            return (
              <Reveal key={i}>
                <p className="post-body__p">{block.text}</p>
              </Reveal>
            );
          })}

          <Reveal className="post-share">
            <span>Share this article</span>
            <div className="flex gap-12">
              <a href="#" className="btn btn-ghost">Copy link</a>
              <a href="#" className="btn btn-ghost">Share</a>
            </div>
          </Reveal>

          {/* Related */}
          <Reveal className="post-related">
            <h3>Related articles</h3>
            <div className="post-related__list">
              {post.related.map((r) => (
                <Link key={r} to="/blog" className="post-related__item card">
                  <span>{r}</span>
                  <Icon name="arrow" size={18} />
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </article>

      <ReviewsSection
        eyebrow="Reader Comments"
        title="What readers are saying"
        items={post.reviews}
      />

      <CTASection {...CTA} />

      <NewsletterSection {...NEWSLETTER} />
    </>
  );
}
