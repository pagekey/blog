import React from 'react';
import YouTubePlayer from './YouTubePlayer';

export default function ProjectPost(props) {
    const children = props.children;
    const frontmatter = props.frontmatter;
    if (!('project_page' in frontmatter)) {
        throw new Error("You must specify project_page to use ProjectPost (offending page: " + frontmatter.title + ")");
    }
    return (
        <div>
            <YouTubePlayer youtubeLink={frontmatter.youtube} />
            <p>
                {children}
            </p>
            <p>
                Full notes are <a href={frontmatter.project_page}>here</a>.
            </p>
        </div>
    );
}