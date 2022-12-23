import React from 'react';
import {
  Block,
  BlockContent,
  BlockEmbed,
  BlockImage,
  BlockText,
} from '@portabletext/react';

export const Components = {
  // Render block content
  blockContent: ({ children, node }) => {
    return <BlockContent node={node}>{children}</BlockContent>;
  },

  // Render a block of text
  blockText: ({ children, node }) => {
    return <BlockText node={node}>{children}</BlockText>;
  },

  // Render an embedded block (e.g. YouTube video)
  blockEmbed: ({ children, node }) => {
    return <BlockEmbed node={node}>{children}</BlockEmbed>;
  },

  // Render an image block
  blockImage: ({ children, node }) => {
    return <BlockImage node={node}>{children}</BlockImage>;
  },

  // Render any other type of block
  block: ({ children, node }) => {
    return <Block node={node}>{children}</Block>;
  },
};

