const transformedAutobotsWithMap = autobots.map(function (autobot) {
  return Object.assign({}, autobot, {
    strength: autobot.strength * 2,
    isTransformed: true,
  });
});

console.log(transformedAutobotsWithMap);
