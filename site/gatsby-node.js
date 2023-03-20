const resolve = require('path').resolve

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(
    `
      {
        allMicrocmsHistory {
          edges {
            node {
              slug
              id
              title
              post
                eyeCatchImg {
                  height
                  url
                  width
                }
            }
          }
        }
      }
    `
    );

  if (result.errors) {
      throw result.errors;
  }

  result.data.allMicrocmsHistory.edges.forEach((post, index) => {
    createPage({
      path: '/live/' + post.node.slug,
      component: resolve('./src/templates/history-post.js'),
      context: {
        id: post.node.id,
        slug: post.node.slug,
        title: post.node.title,
        post: post.node.post,
        imgUrl: post.node.eyeCatchImg.url
      },
    });
  });
};