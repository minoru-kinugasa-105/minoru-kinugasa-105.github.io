'use client';
import React, { useState } from 'react';

import '@/css/object/component/section.scss';
import '@/css/layout/contact.scss';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const sendMail = () => {
        const subject = encodeURIComponent(`お問い合わせ: ${name}`);
        const body = encodeURIComponent(
            `名前:\n${name}\n\nメールアドレス:\n${email}\n\n内容:\n${message}`
        );
        const mailtoLink = `mailto:minoru105ts@gmail.com?subject=${subject}&body=${body}`;
        window.location.href = mailtoLink;
    };

    return (
        <section className="section contact" id="contact">
            <h1 className="section-title">
                <span className="title-text">Contact</span>
                <span className="subtitle-text">連絡先</span>
            </h1>
            <div className="main contact-main">
                <p className="contact-text">
                    このサイトについてのご意見や、僕に直接連絡があるときにお使いください！
                    <br />
                    <a href="https://m_hiyoko_dayo">Twitter(X)</a>
                    でのDMでも受け付けてます〜！
                </p>
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="contact-form"
                >
                    <table className="contact-table">
                        <tbody>
                            <tr>
                                <td className="contact-label">
                                    <label htmlFor="name">
                                        名前
                                        <span className="required">*</span>
                                    </label>
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        id="name"
                                        className="contact-input"
                                        value={name}
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                        placeholder="例: みのる (偽名でも大丈夫です！)"
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="contact-label">
                                    <label htmlFor="email">
                                        メールアドレス
                                        <span className="required">*</span>
                                    </label>
                                </td>
                                <td>
                                    <input
                                        type="email"
                                        id="email"
                                        className="contact-input"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        placeholder="例: info@example.com"
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="contact-label">
                                    <label htmlFor="message">
                                        メッセージ
                                        <span className="required">*</span>
                                    </label>
                                </td>
                                <td>
                                    <textarea
                                        id="message"
                                        className="contact-textarea"
                                        value={message}
                                        onChange={(e) =>
                                            setMessage(e.target.value)
                                        }
                                        placeholder="例: お問い合わせ内容を教えてください！"
                                        required
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <button
                        type="button"
                        onClick={sendMail}
                        className="contact-submit"
                    >
                        メールを送信
                    </button>
                </form>
            </div>
        </section>
    );
}
