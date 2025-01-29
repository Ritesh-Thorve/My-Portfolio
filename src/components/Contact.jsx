{contactInfo.map((info, index) => {
  const Wrapper = info.link ? motion.a : motion.div; // Use <a> only if a link exists
  return (
    <Wrapper
      key={index}
      href={info.link || undefined}
      target={info.link ? "_blank" : undefined}
      rel={info.link ? "noopener noreferrer" : undefined}
      className="flex items-center space-x-4 mb-6 last:mb-0 hover:bg-secondary/30 p-4 rounded-lg transition-all group"
      whileHover={{ x: 10 }}
    >
      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
        <info.icon className="text-2xl text-primary" />
      </div>
      <div>
        <h3 className="font-medium text-gray-200">{info.title}</h3>
        <p className="text-gray-400">{info.content}</p>
      </div>
    </Wrapper>
  );
})}
