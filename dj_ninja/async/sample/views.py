from django.shortcuts import render

# Create your views here.
from ninja import NinjaAPI

import time
import asyncio

api = NinjaAPI()


@api.get("/say-sync")
def say_after_sync(request, delay: int, word: str):
    time.sleep(delay)
    for i in range(10**7):
        pass
    return {"saying": word}


@api.get("/say-async")
async def say_after(request, delay: int, word: str):
    await asyncio.sleep(delay)
    for i in range(10**7):
        pass
    return {"saying": word}
