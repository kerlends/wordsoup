import curio
from anagramsort import get_words

with open('../twl06.txt', 'r') as f:
    wall = f.read().split('\n')
    half = int(len(wall) / 2)
    w1 = wall[:half]
    w2 = wall[half:]

async def task1(rack):
    print("Starting task 1")
    return await get_words(rack, w1)

async def task2(rack):
    print("Starting task 2")
    return await get_words(rack, w2)

async def run_tasks(rack):
    print("Starting tasks..\n")
    t1 = await curio.new_task(task1(rack))
    t2 = await curio.new_task(task2(rack))
    print("done")
    return await (t1, t2)

if __name__ == '__main__':
    kernel = curio.Kernel()
    kernel.run(run_tasks('anagrams'))
