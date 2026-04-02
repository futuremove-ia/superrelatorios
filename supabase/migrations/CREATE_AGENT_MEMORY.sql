-- Agent Memory Persistence Table
-- Enables cross-session memory for self-improving agents

CREATE TABLE IF NOT EXISTS agent_memory (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id VARCHAR(255) NOT NULL,
    memory_type VARCHAR(50) NOT NULL CHECK (memory_type IN ('knowledge', 'skill', 'task', 'user_model')),
    content JSONB NOT NULL,
    relevance_score DECIMAL(3,2) DEFAULT 0.5,
    tags TEXT[] DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    last_accessed TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    access_count INTEGER DEFAULT 0,
    metadata JSONB DEFAULT '{}'
);

CREATE INDEX IF NOT EXISTS idx_agent_memory_session ON agent_memory(session_id);
CREATE INDEX IF NOT EXISTS idx_agent_memory_type ON agent_memory(memory_type);
CREATE INDEX IF NOT EXISTS idx_agent_memory_tags ON agent_memory USING GIN(tags);

COMMENT ON TABLE agent_memory IS 'Cross-session memory storage for self-improving agents (Hermes-like architecture)';
