import type { Metadata } from "next"
import Link from "next/link"
import { spacebaseRepoUrl } from "@/lib/site"
import "@/styles/styleguide.scss"

export const metadata: Metadata = {
  title: "spaceBase Style Guide"
}

const StyleGuidePage = () => {
  return (
    <main>
      <div className="sg container">
        <div className="island text-center">
          <h1>spaceBase Style Guide</h1>
          <p><Link href="/">Back</Link> &nbsp; | &nbsp; <a href={spacebaseRepoUrl} target="_blank" rel="noopener noreferrer">View on GitHub</a></p>
        </div>
        <div className="sg-landmark">
          <h2 className="sg-heading">Basic Grid</h2>
          <p>The grid structure is built on a flexbox-powered 12-column grid. It uses percentage-width flex items with human-readable classnames (i.e. one-half, two-thirds, three-quarters, etc). Each set of &quot;grid&quot; items must be wrapped in a &quot;grid-wrapper&quot;. Grid items can be reversed by adding &quot;grid-wrapper--rev&quot;, and gutters can be removed by adding &quot;grid-wrapper--full&quot;. Alignment and distribution of grid items can be altered with classes as well.</p>
          <p>The grids below show a combination of nested, reversed, and gutterless grids. Each integer represents the high-level grid item you are looking at, and each decimal represents the grid item’s level of nesting (if any), e.g. 2.3 represents the third nested grid inside of the second major grid.</p>
          <div className="grid-wrapper">
            <div className="grid one-half">
              <div className="grid-wrapper">
                <div className="grid">
                  <p className="sg-demo-block">1.1</p>
                </div>
                <div className="grid one-third">
                  <p className="sg-demo-block">1.2</p>
                </div>
                <div className="grid two-thirds">
                  <p className="sg-demo-block">1.3</p>
                </div>
              </div>
            </div>
            <div className="grid one-half">
              <div className="grid-wrapper">
                <div className="grid one-quarter">
                  <p className="sg-demo-block">2.1</p>
                </div>
                <div className="grid three-quarters">
                  <p className="sg-demo-block">2.2</p>
                </div>
                <div className="grid">
                  <p className="sg-demo-block">2.3</p>
                </div>
              </div>
            </div>
            <div className="grid">
              <h3 className="sg-heading">Reverse Grid</h3>
              <div className="grid-wrapper grid-wrapper--rev">
                <div className="grid one-third">
                  <p className="sg-demo-block">3.1</p>
                </div>
                <div className="grid one-third">
                  <p className="sg-demo-block">3.2</p>
                </div>
                <div className="grid one-third">
                  <p className="sg-demo-block">3.3</p>
                </div>
              </div>
            </div>
            <div className="grid">
              <h3 className="sg-heading">Full Grid</h3>
              <div className="grid-wrapper grid-wrapper--full">
                <div className="grid one-eighth">
                  <p className="sg-demo-block">4.1</p>
                </div>
                <div className="grid two-eighths">
                  <p className="sg-demo-block">4.2</p>
                </div>
                <div className="grid three-eighths">
                  <p className="sg-demo-block">4.3</p>
                </div>
                <div className="grid two-eighths">
                  <p className="sg-demo-block">4.4</p>
                </div>
              </div>
            </div>
            <div className="grid">
              <h3 className="sg-heading">Auto Sizing</h3>
              <div className="grid-wrapper">
                <div className="grid shrink">
                  <p className="sg-demo-block">5.1</p>
                </div>
                <div className="grid auto">
                  <p className="sg-demo-block">5.2</p>
                </div>
                <div className="grid auto">
                  <p className="sg-demo-block">5.3</p>
                </div>
              </div>
            </div>
            <div className="grid">
              <h3 className="sg-heading">Push</h3>
              <div className="grid-wrapper">
                <div className="grid one-quarter push--one-quarter">
                  <p className="sg-demo-block">6.1</p>
                </div>
                <div className="grid one-quarter">
                  <p className="sg-demo-block">6.2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sg-landmark">
          <h2 className="sg-heading">Responsive Grid</h2>
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Small</th>
                <th>Medium</th>
                <th>Large</th>
                <th>Extra Large</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Min-Width</strong></td>
                <td>480px</td>
                <td>768px</td>
                <td>1024px</td>
                <td>1200px</td>
              </tr>
              <tr>
                <td><strong>Class Prefix</strong></td>
                <td>.hand-</td>
                <td>.lap-</td>
                <td>.desk-</td>
                <td>.wall-</td>
              </tr>
            </tbody>
          </table>
          <p>The grid below shows a combination of nested, fully-responsive grids using breakpoint-specific classes.</p>
          <div className="grid-wrapper">
            <div className="grid one-half">
              <div className="grid-wrapper">
                <div className="grid">
                  <p className="sg-demo-block">1.1</p>
                </div>
                <div className="grid lap-one-whole desk-one-third">
                  <p className="sg-demo-block">1.2</p>
                </div>
                <div className="grid lap-one-whole desk-two-thirds">
                  <p className="sg-demo-block">1.3</p>
                </div>
              </div>
            </div>
            <div className="grid one-half">
              <div className="grid-wrapper">
                <div className="grid one-half">
                  <p className="sg-demo-block">2.1</p>
                </div>
                <div className="grid one-half">
                  <p className="sg-demo-block">2.2</p>
                </div>
                <div className="grid lap-one-half desk-one-third">
                  <p className="sg-demo-block">2.3</p>
                </div>
                <div className="grid lap-one-half desk-one-third">
                  <p className="sg-demo-block">2.4</p>
                </div>
                <div className="grid desk-one-third">
                  <p className="sg-demo-block">2.5</p>
                </div>
              </div>
            </div>
            <div className="grid hand-one-half lap-one-quarter desk-two-fifths">
              <p className="sg-demo-block">3.0</p>
            </div>
            <div className="grid hand-one-half lap-three-quarters desk-three-fifths">
              <p className="sg-demo-block">4.0</p>
            </div>
          </div>
        </div>
        <div className="sg-landmark">
          <h2 className="sg-heading">Colors</h2>
          <ul className="h-list sg-colors">
            <li>
              <span className="sg-swatch"></span>
              <span className="sg-label">$black</span>
            </li>
            <li>
              <span className="sg-swatch"></span>
              <span className="sg-label">$gray-dark</span>
            </li>
            <li>
              <span className="sg-swatch"></span>
              <span className="sg-label">$gray</span>
            </li>
            <li>
              <span className="sg-swatch"></span>
              <span className="sg-label">$gray-light</span>
            </li>
            <li>
              <span className="sg-swatch"></span>
              <span className="sg-label">$white</span>
            </li>
            <li>
              <span className="sg-swatch"></span>
              <span className="sg-label">$primary</span>
            </li>
            <li>
              <span className="sg-swatch"></span>
              <span className="sg-label">$secondary</span>
            </li>
            <li>
              <span className="sg-swatch"></span>
              <span className="sg-label">$tertiary</span>
            </li>
            <li>
              <span className="sg-swatch"></span>
              <span className="sg-label">$quaternary</span>
            </li>
          </ul>
        </div>
        <div className="sg-landmark">
          <h2 className="sg-heading">Typography</h2>
          <div className="landmark">
            <h1>h1.Heading 1</h1>
            <h2>h2.Heading 2</h2>
            <h3>h3.Heading 3</h3>
            <h4>h4.Heading 4</h4>
            <h5>h5.Heading 5</h5>
            <h6>h6.Heading 6</h6>
          </div>
          <div className="grid-wrapper">
            <div className="grid lap-one-third">
              <h3 className="sg-heading">Unordered List</h3>
              <ul>
                <li>list item 1</li>
                <li>list item 1
                  <ul>
                    <li>list item 2</li>
                    <li>list item 2
                      <ul>
                        <li>list item 3</li>
                        <li>list item 3</li>
                      </ul>
                    </li>
                    <li>list item 2</li>
                    <li>list item 2</li>
                  </ul>
                </li>
                <li>list item 1</li>
                <li>list item 1</li>
              </ul>
            </div>
            <div className="grid lap-one-third">
              <h3 className="sg-heading">Ordered List</h3>
              <ol>
                <li>list item 1</li>
                <li>list item 1
                  <ol>
                    <li>list item 2</li>
                    <li>list item 2
                      <ol>
                        <li>list item 3</li>
                        <li>list item 3</li>
                      </ol>
                    </li>
                    <li>list item 2</li>
                    <li>list item 2</li>
                  </ol>
                </li>
                <li>list item 1</li>
                <li>list item 1</li>
              </ol>
            </div>
            <div className="grid lap-one-third">
              <h3 className="sg-heading">Definition List</h3>
              <dl>
                <dt>Description name</dt>
                <dd>Description value</dd>
                <dt>Description name</dt>
                <dd>Description value</dd>
                <dd>Description value</dd>
                <dt>Description name</dt>
                <dt>Description name</dt>
                <dd>Description value</dd>
              </dl>
            </div>
          </div>
          <h3 className="sg-heading">Table</h3>
          <table>
            <thead>
              <tr>
                <th>Table Heading 1</th>
                <th>Table Heading 2</th>
                <th>Table Heading 3</th>
                <th>Table Heading 3</th>
                <th>Table Heading 4</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <td>Table Footer 1</td>
                <td>Table Footer 2</td>
                <td>Table Footer 3</td>
                <td>Table Footer 3</td>
                <td>Table Footer 4</td>
              </tr>
            </tfoot>
            <tbody>
              <tr>
                <td>Table Cell 1</td>
                <td>Table Cell 2</td>
                <td>Table Cell 3</td>
                <td>Table Cell 4</td>
                <td>Table Cell 5</td>
              </tr>
              <tr>
                <td>Table Cell 1</td>
                <td>Table Cell 2</td>
                <td>Table Cell 3</td>
                <td>Table Cell 4</td>
                <td>Table Cell 5</td>
              </tr>
              <tr>
                <td>Table Cell 1</td>
                <td>Table Cell 2</td>
                <td>Table Cell 3</td>
                <td>Table Cell 4</td>
                <td>Table Cell 5</td>
              </tr>
              <tr>
                <td>Table Cell 1</td>
                <td>Table Cell 2</td>
                <td>Table Cell 3</td>
                <td>Table Cell 4</td>
                <td>Table Cell 5</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="sg-landmark">
          <h2 className="sg-heading">Sample Content</h2>
          <p>Lorem ipsum dolor sit amet, <a href="#">consectetur adipisicing elit</a>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <blockquote>
            <p>Some sort of famous witty quote marked up with a &lt;blockquote&gt; and a child &lt;p&gt; element.</p>
          </blockquote>
          <ul>
            <li>Superscript item<sup>sup</sup></li>
            <li>Subscript item<sub>sub</sub></li>
            <li><small>Small text for fine print.</small></li>
          </ul>
          <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
        </div>
        <div className="sg-landmark">
          <h2 className="sg-heading">Buttons</h2>
          <div className="grid-wrapper">
            <div className="grid lap-one-half">
              <p><input className="btn" type="button" value="Input type button" /></p>
              <p><input className="btn" type="submit" value="Input type submit" /></p>
              <p><input className="btn" type="submit" value="Input type submit disabled" disabled /></p>
              <p><a className="btn">Link type button</a></p>
            </div>
            <div className="grid lap-one-half">
              <p><button className="btn" type="button">Button type button</button></p>
              <p><button className="btn" type="submit">Button type submit</button></p>
              <p><button className="btn" type="button" disabled>Button type button disabled</button></p>
            </div>
          </div>
        </div>
        <div className="sg-landmark">
          <h2 className="sg-heading">Form Fields</h2>
          <form>
            <div className="grid-wrapper">
              <div className="grid lap-one-third">
                <div className="form-group">
                  <label htmlFor="text1">Text Input</label>
                  <input type="text" placeholder="Text Input" id="text1" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="text2">Readonly Text Input</label>
                  <input type="text" placeholder="Readonly Text Input" id="text2" readOnly className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="text3">Disabled Text Input</label>
                  <input type="text" placeholder="Disabled Text Input" id="text3" disabled className="form-control" />
                </div>
                <div className="form-group has-error">
                  <label htmlFor="error" className="error">Error Input</label>
                  <input type="text" placeholder="Text Input" id="error" className="form-control" />
                </div>
                <div className="form-group has-success">
                  <label htmlFor="success" className="success">Valid</label>
                  <input type="text" placeholder="Text Input" id="success" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" placeholder="Type your Password" id="password" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" placeholder="name@email.com" id="email" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="search">Search</label>
                  <input type="search" placeholder="Enter Search Term" id="search" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="number">Number Input</label>
                  <input type="number" pattern="[0-9]*" placeholder="Enter a Number" id="number" className="form-control" />
                </div>
              </div>
              <div className="grid lap-one-third">
                <div className="form-group">
                  <label htmlFor="textarea1">Textarea</label>
                  <textarea placeholder="Enter your message here" cols={40} rows={3} id="textarea1" className="form-control"></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="textarea2">Readonly Textarea</label>
                  <textarea placeholder="Readonly message" cols={40} rows={3} id="textarea2" readOnly className="form-control"></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="textarea3">Disabled Textarea</label>
                  <textarea placeholder="Disabled message" cols={40} rows={3} id="textarea3" disabled className="form-control"></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="select1">Select</label>
                  <select id="select1" className="form-control">
                    <optgroup label="Option Group">
                      <option>Option One</option>
                      <option>Option Two</option>
                      <option>Option Three</option>
                    </optgroup>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="select2">Disabled Select</label>
                  <select id="select2" disabled className="form-control">
                    <option>Option One</option>
                    <option>Option Two</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="multi-select">Multiple Select</label>
                  <select id="multi-select" multiple size={4} className="form-control">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                    <option>Option 4</option>
                    <option>Option 5</option>
                    <option>Option 6</option>
                  </select>
                </div>
              </div>
              <div className="grid lap-one-third">
                <div className="form-group">
                  <label htmlFor="file">File input</label>
                  <input className="form-control-file" type="file" id="file" />
                </div>
                <fieldset className="form-group">
                  <legend>Checkbox</legend>
                  <div className="checkbox"><label htmlFor="checkbox1"><input type="checkbox" defaultChecked name="checkbox" id="checkbox1" /> Choice A</label></div>
                  <div className="checkbox"><label htmlFor="checkbox2"><input type="checkbox" name="checkbox" id="checkbox2" /> Choice B</label></div>
                  <div className="checkbox"><label htmlFor="checkbox3"><input type="checkbox" name="checkbox" id="checkbox3" /> Choice C</label></div>
                  <div className="checkbox"><label htmlFor="checkbox4"><input type="checkbox" name="checkbox" id="checkbox4" disabled /> Choice Disabled</label></div>
                  <div className="checkbox has-error"><label htmlFor="checkbox5"><input type="checkbox" name="checkbox" id="checkbox5" /> Choice Error</label></div>
                  <div className="checkbox has-success"><label htmlFor="checkbox6"><input type="checkbox" name="checkbox" id="checkbox6" /> Choice Valid</label></div>
                </fieldset>
                <fieldset className="form-group">
                  <legend>Radio</legend>
                  <div className="radio"><label htmlFor="radio1"><input type="radio" defaultChecked name="radio" id="radio1" value="option 1" /> Option 1</label></div>
                  <div className="radio"><label htmlFor="radio2"><input type="radio" name="radio" id="radio2" value="option 2" /> Option 2</label></div>
                  <div className="radio"><label htmlFor="radio3"><input type="radio" name="radio" id="radio3" value="option 3" /> Option 3</label></div>
                  <div className="radio"><label htmlFor="radio4"><input type="radio" name="radio" id="radio4" value="option disabled" disabled /> Option Disabled</label></div>
                  <div className="radio has-error"><label htmlFor="radio5"><input type="radio" name="radio" id="radio5" value="option error" /> Option Error</label></div>
                  <div className="radio has-success"><label htmlFor="radio6"><input type="radio" name="radio" id="radio6" value="option valid" /> Option Valid</label></div>
                </fieldset>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}

export default StyleGuidePage