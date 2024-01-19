const api_key = 'c713db4a59ca43229172dae8cd81d14f';
export const get_text = async () => {

    const response = await fetch('https://randommer.io/api/Text/LoremIpsum?loremType=business&type=paragraphs&number=4', {
        method: 'GET',
        headers: {
            'X-Api-Key': api_key
        }
    });

    if (!response.ok) {
        console.error(await response.text());
        throw new Error('Could not get fake text');
    }
    return await response.json();
}
