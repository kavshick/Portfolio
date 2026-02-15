import nlp from 'compromise';

/**
 * Local AI Service (Mock) - Upgraded with 'compromise' NLP
 * Simulates AI responses using natural language processing without an API key.
 */

// 1. Neural Chat Assistant (Local)
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

// 2. Sentiment Processor (Local)
export const localAnalyzeSentiment = async (text: string): Promise<'Positive' | 'Negative' | 'Neutral'> => {
  await new Promise(resolve => setTimeout(resolve, 300)); // Simulate latency

  const doc = nlp(text);
  const sentiment = doc.sentiment();

  // Using a threshold for more definitive classification
  if (sentiment.score > 0.5) {
    return 'Positive';
  }
  if (sentiment.score < -0.5) {
    return 'Negative';
  }
  
  return 'Neutral';
};

// 3. Feedback Classifier (Local)
export const localClassifyFeedback = async (feedback: string): Promise<object> => {
  await new Promise(resolve => setTimeout(resolve, 400)); // Simulate latency

  const doc = nlp(feedback);

  if (doc.has('(bug|error|broken|fail|crash)')) {
    return {
      category: 'BUG',
      confidence: 0.95,
      reason: "The feedback contains terms commonly associated with software bugs.",
      topics: doc.nouns().out('array')
    };
  }
  if (doc.has('(feature|idea|add|suggestion|improve)')) {
    return {
      category: 'FEATURE REQUEST',
      confidence: 0.92,
      reason: "The feedback suggests an improvement or a new feature.",
      topics: doc.verbs().out('array').concat(doc.nouns().out('array'))
    };
  }
  
  return {
    category: 'GENERAL',
    confidence: 0.88,
    reason: "The feedback does not contain specific keywords for bugs or feature requests.",
    topics: doc.topics().out('array')
  };
};

