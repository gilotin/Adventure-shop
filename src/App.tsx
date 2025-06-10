function App() {
    return (
        <>
            <header className="header">
                <div className="logo">
                    <p>LOGO</p>
                </div>
                <nav className="navigation">
                    <a href="/">HOME</a>
                    <a href="">MARKET</a>
                    <a href="">VOID SHOP</a>
                    <a href="">ADVENTURE</a>
                    <div>
                        <a href="">PROFILE</a>
                    </div>
                </nav>
            </header>
            <main className="main">
                <h1>Header1</h1>
                <h2>Header2</h2>
                <h3>Header3</h3>
                <h4>Header4</h4>
                <h5>Header5</h5>
                <h6>Header6</h6>

                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique quas, magni
                    rem possimus aut reprehenderit, excepturi, molestias laboriosam sed accusantium
                    placeat nobis ducimus earum provident explicabo minus nulla natus ipsum? Cumque
                    itaque repellat explicabo incidunt eius? Sit soluta sint provident quaerat
                    dignissimos, perferendis odit minima eveniet porro laudantium quas a cum
                    facilis. Porro quod alias quia deleniti vitae ex praesentium! Omnis officiis
                    rerum ex, veritatis accusantium consequuntur illum, magni ea quos eligendi
                    molestias aperiam obcaecati assumenda. Dolor officia quia quam officiis
                    obcaecati magni, similique laudantium tempore, eveniet reprehenderit cum harum.
                </p>
                <h2>This is title</h2>
                <p>
                    This is a paragraph of body text. It demonstrates how text appears by default
                    using your base font size, line height, and color. Typography is one of the most
                    important parts of UI design.
                </p>
                <h3>This is also title h3</h3>
                <p>
                    Here's another paragraph with <strong>strong</strong> and <em>emphasized</em>{" "}
                    text. You can also use <u>underlined</u> and <code>inline code</code> elements.
                </p>

                <blockquote>
                    “This is a blockquote. It’s useful for quotations or emphasizing longer text
                    passages.”
                </blockquote>

                <pre>
                    <code>{`function greet(name) {
  return "Hello, " + name + "!";
}`}</code>
                </pre>

                <ul>
                    <li>Unordered list item one</li>
                    <li>Unordered list item two</li>
                    <li>Unordered list item three</li>
                </ul>

                <ol>
                    <li>Ordered list item one</li>
                    <li>Ordered list item two</li>
                    <li>Ordered list item three</li>
                </ol>

                <p>
                    A{" "}
                    <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                        link
                    </a>{" "}
                    should look distinct and be easy to identify.
                </p>

                <hr />

                <p>
                    <small>This is small print, often used for disclaimers or fine print.</small>
                </p>

                <p>
                    <mark>This text is highlighted using the mark tag.</mark>
                </p>

                <p>
                    <abbr title="HyperText Markup Language">HTML</abbr> is a markup language.
                </p>

                <h3>Table Example</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Feature</th>
                            <th>Status</th>
                            <th>Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Headings</td>
                            <td>✅</td>
                            <td>h1–h6 supported</td>
                        </tr>
                        <tr>
                            <td>Paragraph</td>
                            <td>✅</td>
                            <td>1.15rem with good line height</td>
                        </tr>
                        <tr>
                            <td>Table</td>
                            <td>✅</td>
                            <td>Now included!</td>
                        </tr>
                    </tbody>
                </table>
            </main>
            <footer className="footer">
                <p>Adventure shop created by Nikolay Toshev all rights reserved.</p>
            </footer>
        </>
    );
}

export default App;
