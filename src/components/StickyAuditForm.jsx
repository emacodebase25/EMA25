import React, { useState, useEffect } from 'react';
import './sticky.css'

const StickyAuditForm = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 200) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`audit_form faq-audit-frm ${isSticky ? 'sticky' : ''}`}>
      <h3>Free Audit Now</h3>
      <form>
        <ul className="row">
          <li className="col-lg-12">
            <input placeholder="Enter Name" required className="form-control" type="text" name="name" />
          </li>
          <li className="col-lg-12">
            <input placeholder="Enter Email" required className="form-control" type="email" name="email" />
          </li>
          <li className="col-lg-12">
            <input placeholder="Enter Phone" className="form-control" type="number" name="phone" />
          </li>
          <li className="col-lg-12">
            <input placeholder="Enter Website Url" className="form-control" type="text" name="website" />
          </li>
          <li className="col-lg-12">
            <textarea name="message" placeholder="Enter Message" rows="5" className="form-control"></textarea>
          </li>
          <li className="col-lg-12" style={{ flex: 'inherit', width: '400px', margin: '0 auto' }}>
            <input className="btn btn-primary faq-btn" type="submit" value="Send" />
          </li>
        </ul>
      </form>
    </div>
  );
};

export default StickyAuditForm;
