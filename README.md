# Codivo - Real-Time Collaborative Code Editor
real-time collaborative code editor with video chat
 
## A web app where users can:

- Write and edit code collaboratively in real-time

- See each other's cursor movements

- Video chat while coding

- Save code snippets to profiles

- Execute code in multiple languages (Python, JavaScript, etc.)
---
## Key Features to Implement

### ✨ Real-Time Collaboration

- Use **WebSockets** to sync code changes instantly between users.
- Implement **Operational Transforms (OT)** or **CRDTs** for conflict resolution.

### 🔑 User Authentication

- Signup/login with **email** or **GitHub OAuth**.
- Implement **role-based access control (admin/user)**.

### ⚙️ Code Execution

- Execute code **securely** using **Docker containers**.
- Support multiple languages: **Python, JavaScript, etc.**

### 🎥 Video Chat Integration

- Use **WebRTC** for **peer-to-peer** video/audio communication.
- Fallback to **Socket.IO** if NAT traversal fails.

### ⌛ Version Control

- Save **code history** (similar to Git).
- Allow users to **revert** to previous versions.

---

