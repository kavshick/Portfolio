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

// 2. Sentiment Processor (Local) - Final Rework for Stability
export const localAnalyzeSentiment = async (text: string): Promise<'Positive' | 'Negative' | 'Neutral'> => {
  await new Promise(resolve => setTimeout(resolve, 300));

  if (!text || text.trim() === '') {
    return 'Neutral';
  }

  try {
    const lowerText = text.toLowerCase();
    const doc = nlp(lowerText);
    let score = 0;

    // Expanded and more reliable keyword lists
    const positiveKeywords = [
      'good', 'great', 'awesome', 'excellent', 'love', 'like', 'amazing', 'fantastic', 
      'perfect', 'nice', 'happy', 'pleased', 'wonderful', 'superb', 'brilliant'
    ];
    const negativeKeywords = [
      'bad', 'terrible', 'awful', 'horrible', 'hate', 'dislike', 'poor', 'broken', 
      'error', 'problem', 'issue', 'sucks', 'crap', 'fail'
    ];

    positiveKeywords.forEach(keyword => {
      if (lowerText.includes(keyword)) {
        score++;
      }
    });

    negativeKeywords.forEach(keyword => {
      if (lowerText.includes(keyword)) {
        score--;
      }
    });

    // Simple negation handling
    const hasNegation = doc.has('(not|never|isnt|wasnt|dont)');
    if (hasNegation && score !== 0) {
      score = score * -1;
    }

    if (score > 0) {
      return 'Positive';
    }
    if (score < 0) {
      return 'Negative';
    }
    
    return 'Neutral';
  } catch (e) {
    console.error("Sentiment analysis failed:", e);
    // If any part of the NLP library fails, return a neutral state instead of crashing.
    return 'Neutral';
  }
};

// 3. Feedback Classifier (Local) - Reworked with more categories
export const localClassifyFeedback = async (feedback: string): Promise<object> => {
  await new Promise(resolve => setTimeout(resolve, 400));

  if (!feedback || feedback.trim() === '') {
    return { category: 'GENERAL', confidence: 0.9, reason: "Input was empty.", topics: [] };
  }

  const doc = nlp(feedback.toLowerCase());
  let scores = { bug: 0, feature: 0, positive: 0, negative: 0 };

  const keywords = {
    bug: ['bug', 'error', 'broken', 'fail', 'crash', 'not working', 'issue', 'problem'],
    feature: ['feature', 'idea', 'add', 'suggestion', 'improve', 'request', 'should have', 'recommend'],
    positive: ['good', 'great', 'awesome', 'excellent', 'love', 'like', 'amazing', 'fantastic', 'perfect', 'nice'],
    negative: ['bad', 'terrible', 'awful', 'horrible', 'hate', 'dislike', 'poor']
  };

  (Object.keys(keywords) as Array<keyof typeof keywords>).forEach(key => {
    keywords[key].forEach(keyword => {
      if (doc.has(keyword)) {
        scores[key]++;
      }
    });
  });

  // Determine the category with the highest score
  const topCategory = Object.entries(scores).reduce((a, b) => b[1] > a[1] ? b : a);

  if (topCategory[1] > 0) {
    switch (topCategory[0]) {
      case 'bug':
        return { category: 'BUG', confidence: Math.min(0.95, 0.8 + scores.bug * 0.1), reason: "Feedback contains terms related to bugs.", topics: doc.nouns().out('array') };
      case 'feature':
        return { category: 'FEATURE REQUEST', confidence: Math.min(0.95, 0.8 + scores.feature * 0.1), reason: "Feedback suggests a new feature or improvement.", topics: doc.nouns().out('array') };
      case 'positive':
        return { category: 'POSITIVE FEEDBACK', confidence: Math.min(0.95, 0.8 + scores.positive * 0.1), reason: "Feedback contains positive sentiment.", topics: doc.adjectives().out('array') };
      case 'negative':
        return { category: 'NEGATIVE FEEDBACK', confidence: Math.min(0.95, 0.8 + scores.negative * 0.1), reason: "Feedback contains negative sentiment.", topics: doc.nouns().out('array') };
    }
  }

  // Default to GENERAL
  return {
    category: 'GENERAL',
    confidence: 0.88,
    reason: "The feedback does not contain a significant number of keywords for a specific category.",
    topics: doc.topics().out('array')
  };
};

