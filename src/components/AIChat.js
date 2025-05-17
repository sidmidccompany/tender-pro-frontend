import React, { useState } from 'react';

import './CSS/AllCss'; 


const AIChat = ({ onClose }) => {
    const [messages, setMessages] = useState([
      {
        type: 'assistant',
        content: `Hello! I'm your AI-powered tender assistant. I can help you with:
        • Tender analysis and recommendations
        • Bid pricing optimization
        • Compliance checking
        • Document review and generation
        • Competitor analysis
        • Deadline management`,
        time: new Date()
      }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
  
    const sendMessage = () => {
      if (inputValue.trim()) {
        // Add user message
        const userMessage = {
          type: 'user',
          content: inputValue,
          time: new Date()
        };
        setMessages([...messages, userMessage]);
        setInputValue('');
        setIsTyping(true);
  
        // Simulate AI response
        setTimeout(() => {
          const aiResponse = {
            type: 'assistant',
            content: generateAIResponse(inputValue),
            time: new Date()
          };
          setMessages(prev => [...prev, aiResponse]);
          setIsTyping(false);
        }, 1500);
      }
    };
  
    const generateAIResponse = (query) => {
      const responses = {
        'tender': 'I can help you analyze tender documents, identify key requirements, and suggest optimal bidding strategies.',
        'price': 'Based on my analysis of similar tenders, I recommend a competitive pricing strategy that balances profitability with win probability.',
        'deadline': 'You have 3 tenders with deadlines in the next 7 days. Would you like me to prioritize them?',
        'compliance': 'I can check your tender documents for compliance with government regulations and ensure all mandatory requirements are met.',
        'analysis': 'I can provide detailed analytics on your tender performance, competitor activity, and market trends.',
        'document': 'I can help review tender documents, extract key information, and identify any missing requirements.',
        'competition': 'I can analyze competitor bidding patterns and suggest strategies to improve your win rate.',
        'report': 'I can generate comprehensive reports on tender performance, success rates, and financial metrics.',
        'help': 'I can assist with tender analysis, bid pricing, compliance checking, document review, competitor analysis, and deadline management.',
        'gem': 'I can help you navigate GeM portal requirements and optimize your bids for government e-marketplace tenders.',
        'status': 'I can track tender status, send deadline reminders, and provide real-time updates on your active bids.'
      };
  
      const query_lower = query.toLowerCase();
      for (let key in responses) {
        if (query_lower.includes(key)) {
          return responses[key];
        }
      }
  
      // Advanced AI response with context
      if (query_lower.includes('bid') && query_lower.includes('price')) {
        return `For optimal bid pricing, I analyze:\n• Historical win rates\n• Competitor patterns\n• Project complexity\n• Market conditions\n\nBased on current data, I recommend bidding at 93% of the estimated value for the Railway tender.`;
      }
  
      return `I understand you're asking about "${query}". Let me analyze the relevant information and provide you with detailed insights. Could you provide more specific details about which tender or aspect you'd like me to focus on?`;
    };
  
    const clearChat = () => {
      setMessages([{
        type: 'assistant',
        content: `Chat cleared. How can I help you with tender management today?`,
        time: new Date()
      }]);
    };
  
    return (
      <div className="ai-chat-container">
        <div className="ai-chat-header">
          <div className="ai-chat-title">AI Assistant - Powered by Advanced NLP</div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button className="btn btn-secondary btn-icon" onClick={clearChat} title="Clear Chat">
              🗑️
            </button>
            <button className="modal-close" onClick={onClose}>×</button>
          </div>
        </div>
        <div className="ai-chat-messages">
          {messages.map((message, index) => (
            <div key={index} className={`ai-message ${message.type}`}>
              <div>{message.content}</div>
              <div className="ai-message-time">
                {message.time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          ))}
        </div>
        {isTyping && (
          <div className="ai-typing-indicator">
            <div className="typing-dots">
              <div className="typing-dot"></div>
              <div className="typing-dot"></div>
              <div className="typing-dot"></div>
            </div>
            <span style={{ marginLeft: '10px', color: '#666' }}>AI is typing...</span>
          </div>
        )}
        <div className="ai-suggestions-list">
          <span className="ai-suggestion-chip" onClick={() => setInputValue('analyze current tender')}>
            Analyze Current Tender
          </span>
          <span className="ai-suggestion-chip" onClick={() => setInputValue('check compliance')}>
            Check Compliance
          </span>
          <span className="ai-suggestion-chip" onClick={() => setInputValue('suggest bid price')}>
            Suggest Bid Price
          </span>
          <span className="ai-suggestion-chip" onClick={() => setInputValue('competition analysis')}>
            Competition Analysis
          </span>
        </div>
        <div className="ai-chat-input-container">
          <input 
            type="text" 
            className="ai-chat-input" 
            placeholder="Ask me anything about tenders..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            aria-label="AI Chat Input"
          />
          <button className="ai-chat-send" onClick={sendMessage} aria-label="Send Message">Send</button>
        </div>
      </div>
    );
  };
  export default AIChat;