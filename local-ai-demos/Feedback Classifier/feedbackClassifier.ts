import nlp from 'compromise';

/**
 * Local Feedback Classifier (Mock)
 * Uses the 'compromise' NLP library to analyze feedback and classify it
 * based on the topics and terms found in the text.
 */
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
