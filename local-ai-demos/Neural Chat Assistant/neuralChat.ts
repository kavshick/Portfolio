import nlp from 'compromise';

/**
 * Local Neural Chat Assistant (Mock)
 * Uses the 'compromise' NLP library to understand user intent and provide
 * more relevant, context-aware responses without an API key.
 */
export const localChat = async (message: string): Promise<string> => {
  await new Promise(resolve => setTimeout(resolve, 500)); // Simulate latency

  const doc = nlp(message);

  if (doc.has('(hello|hi|hey)')) {
    return "Hello! I'm a local NLP-powered assistant. Ask me about this portfolio's projects, skills, or creator.";
  }
  if (doc.has('(project|build|work)')) {
    return "This portfolio features several key projects, including 'BuildSmart AI' for construction tech and 'Trials of Ascendence' for game development. What interests you?";
  }
  if (doc.has('(skill|tech|stack|language)')) {
    return "The core skills demonstrated here are in AI/ML, SaaS architecture (Next.js, FastAPI), and game development (Unreal Engine 5).";
  }
  if (doc.has('(contact|email|reach out)')) {
    return "You can find professional contact details on the 'Contact' page. I'm just a local bot, so I can't share personal info!";
  }
  if (doc.has('(who are you|what are you)')) {
    return "I am a local, browser-based NLP assistant running on the 'compromise' library. I'm here to demonstrate offline AI capabilities.";
  }

  // Fallback response
  const topics = doc.topics().out('array');
  if (topics.length > 0) {
    return `I see you're asking about '${topics[0]}'. I'm a simple demo, but you can find more detailed information on the relevant pages of this portfolio.`;
  }
  
  return "I'm not advanced enough to understand that yet. Try asking about 'projects', 'skills', or 'contact'.";
};
