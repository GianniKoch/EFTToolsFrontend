import {env} from "$env/dynamic/public";

export async function getItems() {
    const response = await fetch(`${env.PUBLIC_BACKEND_URL}/EftToolsApi/Items`)
    return await response.json()
}
export async function getAmmo() {
    const response = await fetch(`${env.PUBLIC_BACKEND_URL}/EftToolsApi/Ammo`)
    return await response.json()
}