const { useState } = React;

function UserForm() {
    // Form state - only 3 fields
    const [formData, setFormData] = useState({
        name: '',
        uid: '',
        gender: ''
    });
    
    const [submitted, setSubmitted] = useState(false);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Show data in console
        console.log('📋 User Form Data:', formData);
        
        // Show success message
        setSubmitted(true);
        
        // Hide success message after 3 seconds
        setTimeout(() => {
            setSubmitted(false);
        }, 3000);
    };

    return (
        <div className="container">
            <h1>User Registration</h1>
            
            <form onSubmit={handleSubmit}>
                {/* Name Field */}
                <div className="form-group">
                    <label>Full Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                    />
                </div>
                
                {/* UID Field */}
                <div className="form-group">
                    <label>User ID:</label>
                    <input
                        type="text"
                        name="uid"
                        value={formData.uid}
                        onChange={handleChange}
                        placeholder="Enter your user ID"
                        required
                    />
                </div>
                
                {/* Gender Field */}
                <div className="form-group">
                    <label>Gender:</label>
                    <div className="radio-group">
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="male"
                                checked={formData.gender === 'male'}
                                onChange={handleChange}
                            />
                            Male
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="female"
                                checked={formData.gender === 'female'}
                                onChange={handleChange}
                            />
                            Female
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="other"
                                checked={formData.gender === 'other'}
                                onChange={handleChange}
                            />
                            Other
                        </label>
                    </div>
                </div>
                
                <button type="submit">Submit</button>
            </form>

            {/* Success Message */}
            {submitted && (
                <div className="success">
                    ✅ Form submitted successfully!
                </div>
            )}
        </div>
    );
}

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<UserForm />);