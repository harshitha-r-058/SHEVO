// This script sends a test user to your running SHEVO server
async function testRegister() {
    try {
        const response = await fetch('http://localhost:5003/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                originalName: "Priya Sharma",
                email: "priya@test.com",
                password: "SecurePassword123"
            })
        });

        const data = await response.json();
        console.log("-----------------------------------------");
        console.log("💌 SERVER RESPONSE:", data);
        console.log("-----------------------------------------");
    } catch (error) {
        console.log("❌ Error connecting to server. Is it running?");
    }
}

testRegister();