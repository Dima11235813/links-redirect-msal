import React from "react";

function DemoLinks({itemUrl, namedTargetOrBlank}){
    return (
        <div>
            Netlify {itemUrl} Links
        <div>
                <a href={itemUrl}>Regular Link</a>
            </div>
            <div>
                <a href={itemUrl} target={namedTargetOrBlank} rel="noopener noreferrer">
                    No Referrer and No Opener New Tab
          </a>
            </div>
            <div>
                <a href={itemUrl} target={namedTargetOrBlank} rel="noreferrer">
                    No Referrer New Tab
          </a>
            </div>
            <div>
                <a href={itemUrl} target={namedTargetOrBlank} rel="noopener">
                    No Opener New Tab
          </a>
            </div>
            <div>
                <a href={itemUrl} target={namedTargetOrBlank}>
                    Named Target Link
          </a>
            </div>
            <div>
                <a href={itemUrl} target="_blank">
                    Target _blank New Tab
          </a>
            </div>
        </div>
    )
}
export default DemoLinks