import nlp from 'compromise';
import 'compromise/plugins/sentiment';

/**
 * Local Sentiment Processor (Mock)
 * Uses the 'compromise' NLP library to analyze sentiment from text.
 * This provides a more nuanced analysis than simple keyword matching.
 */
export const localAnalyzeSentiment = async (text: string): Promise<'Positive' | 'Negative' | 'Neutral'> => {
  await new Promise(resolve => setTimeout(resolve, 300)); // Simulate latency

  const doc = nlp(text);
  const sentiment = doc.sentiment();

  if (sentiment.score > 0.5) {
    return 'Positive';
  }
  if (sentiment.score < -0.5) {
    return 'Negative';
  }
  
  return 'Neutral';
};
