function ValidationException(message: string): Response {
    return new Response(JSON.stringify({ message }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }