const generatedMockPosts = (n) => {
  return Array(n)
    .fill()
    .map((_, i) => ({
      id: i + 1,
      title: `title-${i + 1}`,
      content: `content-${i + 1}`,
      isLiked: false,
    }));
};

module.exports = generatedMockPosts;
