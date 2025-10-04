// Test localStorage functionality
// Run this in browser console to verify localStorage persistence

function testLocalStorage() {
  console.log('🧪 Testing AI Content Generator localStorage...');
  
  // Check if localStorage is available
  if (typeof Storage === 'undefined') {
    console.error('❌ localStorage is not supported');
    return false;
  }
  
  // Test keys used by the app
  const testKeys = [
    'ai-generator-prompt',
    'ai-generator-content-type', 
    'ai-generator-tone',
    'ai-generator-length',
    'ai-generator-output'
  ];
  
  console.log('📝 Current localStorage values:');
  testKeys.forEach(key => {
    const value = localStorage.getItem(key);
    console.log(`  ${key}: ${value || 'null'}`);
  });
  
  // Test setting values
  console.log('✍️ Setting test values...');
  localStorage.setItem('ai-generator-prompt', '"Test prompt for localStorage"');
  localStorage.setItem('ai-generator-content-type', '"blog-post"');
  localStorage.setItem('ai-generator-tone', '"professional"');
  localStorage.setItem('ai-generator-length', '"medium"');
  localStorage.setItem('ai-generator-output', '"# Test Output\\n\\nThis is test generated content."');
  
  console.log('✅ Test values set. Refresh the page to verify persistence!');
  console.log('🔄 After refresh, run testLocalStorage() again to verify values persisted.');
  
  return true;
}

// Export for console use
if (typeof window !== 'undefined') {
  (window as unknown as Record<string, unknown>).testLocalStorage = testLocalStorage;
}

export default testLocalStorage;